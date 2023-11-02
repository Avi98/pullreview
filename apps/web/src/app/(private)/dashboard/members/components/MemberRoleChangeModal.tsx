import { useCallback, useState } from "react";
import { Modal } from "../../../../../components/modal";
import { useMemberActionModal } from "./ModalProviders";
import { type MEMBER_ROLE } from "../../../../../utils/types";
import { castStringToMember as castStringToMemberRole } from "../../../../../utils";
import { Select } from "../../../../../components/select/Select";
import { Button } from "../../../../../components/button/Button";

interface IMemberRoleChangeModal {}

const role_options: Array<{ label: string; value: MEMBER_ROLE }> = [
  {
    label: "Admin",
    value: "admin",
  },
  { label: "Member", value: "member" },
];

const getRole = (role: string) =>
  role_options.filter(({ value }) => role === value).at(0);

export const MemberRoleChangeModal = ({}: IMemberRoleChangeModal) => {
  const {
    isUpdateMemberModalOpen: isOpen,
    memberName,
    memberRole,
    toggleUpdateMemberModal,
  } = useMemberActionModal();

  const [role, setRole] = useState<{ label: string; value: MEMBER_ROLE }>(
    getRole(memberRole) || {
      label: "Member",
      value: "member",
    }
  );

  const updateMemberRole = useCallback((value: string) => {
    if (!value) return;

    const memberRole = castStringToMemberRole(value);
    const role = memberRole ? getRole(memberRole) : null;
    if (role) setRole(role);
  }, []);

  const handleSubmit = (e: any) => {
    console.log({ e });
  };

  return (
    <Modal
      open={isOpen}
      title={`Update role`}
      closeModal={toggleUpdateMemberModal}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="text-sm">Current role for {`${memberName}`}</div>
            <Select
              value={role}
              onChange={updateMemberRole}
              options={role_options}
              placeholder="User role"
            />
          </div>
          <div className="flex justify-end gap-3 py-5">
            <Button>Cancel</Button>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};
