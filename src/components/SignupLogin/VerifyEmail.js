import { TextInput, Text, Button } from "@mantine/core";
import { useModals } from "@mantine/modals";

function VerifyEmail() {
  const modals = useModals();

  const openContentModal = () => {
    const id = modals.openModal({
      title: "Subscribe to newsletter",
      children: (
        <>
          <TextInput label="Your email" />
          <Button fullWidth onClick={() => modals.closeModal(id)}>
            Submit
          </Button>
        </>
      ),
    });
  };

  return <Button onClick={openContentModal}>Open content modal</Button>;
}
export default VerifyEmail;
