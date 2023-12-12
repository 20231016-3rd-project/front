import React from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

interface AlertReviewProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  cancelRef: React.RefObject<HTMLButtonElement>;
  onDelete: () => void;
}
const AlertReview: React.FC<AlertReviewProps> = ({
  isOpen,
  onOpen,
  onClose,
  cancelRef,
  onDelete,
}) => {
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            리뷰를 삭제하시겠습니까?
          </AlertDialogHeader>

          <AlertDialogBody>삭제된 리뷰는 복구되지 않습니다.</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              돌아가기
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                onDelete();
                onClose();
              }}
              ml={3}
            >
              삭제
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default AlertReview;
