<?php

namespace App\Services;

use App\Entity\UserAway;
use App\Entity\Users;
use Doctrine\ORM\EntityManagerInterface;

class UserAwayService
{
    private $entityManager;
    private $dateArray = [];

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function getSingle($userId)
    {
        $userAways = $this->entityManager->getRepository(UserAway::class)->getByUserId($userId);

        $dataArray = [];
        foreach ($userAways as $userAway) {
            $single = [];
            $single['awayId'] = $userAway->getId();
            $single['startDate'] = $userAway->getAwayStartDate()->format('Y-m-d');
            $single['endDate'] = $userAway->getAwayEndDate()->format('Y-m-d');
            array_push($dataArray, $single);
        }
        return $dataArray;
    }

    public function post($dataArray)
    {
        $user = $this->entityManager->getRepository(Users::class)->findUserById($dataArray['id']);
        $this->userAwayTimeArray($dataArray['awayDate']);
        if (!$user) {
        } else {
            foreach ($dataArray['awayDate'] as $value) {
                $userAway = new UserAway();
                $dateStart = $this->dateFromString($value['awayStartDate']);
                $dateEnd = $this->dateFromString($value['awayEndDate']);

                $validate = $this->validateProvidedDate($dateStart, $dateEnd);
                if ($validate) {
                    return $array = ['error' => 'date sequence not valid'];
                } else {
                    $duplicate = $this->checkUserAwayDuplicates(
                        $dateStart->format('Y-m-d H:i:s'),
                        $dateEnd->format('Y-m-d H:i:s'),
                        $dataArray['id']
                    );
                    if ($duplicate) {
                        return $array = ['error' => "duplicate"];
                    } else {
                        $userAway->setAwayStartDate($dateStart);
                        $userAway->setAwayEndDate($dateEnd);
                        $userAway->setAwayUser($user);
                        $this->entityManager->persist($userAway);
                    }
                }
            }
            $this->checkReservationsForChange();
            $this->entityManager->flush();
            return $array = ['success' => "success"];
        }
    }

    public function put($dataArray)
    {
        foreach ($dataArray['awayDate'] as $value) {
            $userAway = $this->entityManager->getRepository(UserAway::class)->findById($value['id']);
            if (!$userAway) {
            } else {
                //TODO check user id with token provided id
                $clientId = $userAway->getAwayUser()->getId();
                $dateStart = $this->dateFromString($value['awayStartDate']);
                $dateEnd = $this->dateFromString($value['awayEndDate']);
                $validate = $this->validateProvidedDate($dateStart, $dateEnd);
                if ($validate) {
                    return $array = ['error' => 'date sequence not valid'];
                } else {
                    $userAway->setAwayStartDate($dateStart);
                    $userAway->setAwayEndDate($dateEnd);
                }
            }
        }
        $this->entityManager->flush();
        return $array = ['success' => "success"];
    }

    public function delete($dataArray)
    {
        foreach ($dataArray['awayDate'] as $value) {
            $userAway = $this->entityManager->getRepository(UserAway::class)->findById($value['id']);
            if ($userAway) {
                $this->entityManager->remove($userAway);
            }
        }
        $this->entityManager->flush();
        return $array = ['success' => "success"];
    }

    public function checkUserAwayDuplicates($startDate, $endDate, $userId)
    {

        $userAway = $this->entityManager
            ->getRepository(UserAway::class)
            ->findSingleUserAwayByDate($startDate, $endDate, $userId);
        if ($userAway != null) {
            return true;
        }
        return false;
    }

    private function checkReservationsForChange()
    {
        $reservations = new ReservationService($this->entityManager);
        $reservations->checkUserAwayChanges($this->dateArray);
        die;
    }

    private function validateProvidedDate($startDate, $endDate)
    {
        if ($startDate > $endDate) {
            return true;
        }
        return false;
    }

    private function userAwayTimeArray($array)
    {
        foreach ($array as $value) {
            $startObject = new \DateTime($value['awayStartDate']);
            $endObject = new \DateTime($value['awayEndDate']);
            $endObject->modify("+1 day");
            $period = new \DatePeriod($startObject, new \DateInterval('P1D'), $endObject);

            foreach ($period as $string) {
                array_push($this->dateArray, $string->format('Y-m-d H:i:s'));
            }
        }
    }


    private function dateFromString($dateString)
    {
        $format = '!Y-m-d';
        $date = \DateTime::createFromFormat($format, $dateString);
        return $date;
    }
}
