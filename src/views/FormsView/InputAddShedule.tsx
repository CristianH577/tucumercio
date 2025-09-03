import { Button, Input, Option, Select } from "@mui/joy";
import { useState } from "react";
import { OBJ_SCHEDULE } from "../../consts/objectsLists";
import type { TypeSchedule } from "../../consts/types";

type TypeProps = {
  currentVal: TypeSchedule[];
  onAdd: (val: TypeSchedule[]) => void;
};

const schedule_value_default = [1, null, "08:00", "13:00", null, null];

export default function InputAddShedule({ currentVal = [], onAdd }: TypeProps) {
  const [scheduleValues, setScheduleValues] = useState<TypeSchedule>(
    schedule_value_default
  );

  const handleAddSchedule = () => {
    if (
      !currentVal.some(
        (e) => JSON.stringify(e) === JSON.stringify(scheduleValues)
      )
    ) {
      const vals_ = [...currentVal, scheduleValues];
      setScheduleValues(schedule_value_default);
      onAdd(vals_);
    }
  };

  const deleteItemFromItems = (value: TypeSchedule = []) => {
    const items_filtered = currentVal.filter(
      (e) => JSON.stringify(e) !== JSON.stringify(value)
    );
    onAdd(items_filtered);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Select
          name="schedule"
          placeholder="De"
          slotProps={{
            root: { sx: { width: 120 } },
          }}
          value={String(scheduleValues[0])}
          onChange={(_, val) => {
            const vals_ = structuredClone(scheduleValues);
            vals_[0] = Number(val) || null;
            setScheduleValues(vals_);
          }}
        >
          {Object.entries(OBJ_SCHEDULE).map(([id, val]) => (
            <Option key={id} value={id}>
              {val}
            </Option>
          ))}
        </Select>

        <Select
          name="schedule"
          placeholder="A"
          slotProps={{
            root: { sx: { width: 120 } },
          }}
          value={String(scheduleValues[1])}
          onChange={(_, val) => {
            const vals_ = structuredClone(scheduleValues);
            vals_[1] = Number(val) || null;
            setScheduleValues(vals_);
          }}
        >
          <Option value="">
            <em>Quitar</em>
          </Option>
          {Object.entries(OBJ_SCHEDULE).map(([id, val]) => (
            <Option key={id} value={id}>
              {val}
            </Option>
          ))}
        </Select>

        {[2, 3, 4, 5].map((_, i) => (
          <Input
            key={i}
            type="time"
            placeholder={"Horario " + (i + 1)}
            endDecorator="hs"
            slotProps={{
              root: { sx: { width: 140 } },
            }}
            value={scheduleValues[i + 2] || ""}
            onChange={(e) => {
              const vals_ = structuredClone(scheduleValues);
              vals_[i + 2] = e.target.value || null;
              setScheduleValues(vals_);
            }}
          />
        ))}

        <Button color="primary" variant="soft" onClick={handleAddSchedule}>
          Agregar
        </Button>
      </div>

      <ol className="p-2 text-sm list-disc list-inside">
        {currentVal.map((list, i) => (
          <li
            key={i}
            className="cursor-pointer hover:line-through"
            onClick={() => deleteItemFromItems(list)}
          >
            {OBJ_SCHEDULE[list[0] as keyof typeof OBJ_SCHEDULE]}
            {list[1] &&
              " a " + OBJ_SCHEDULE[list[1] as keyof typeof OBJ_SCHEDULE]}
            , {list[2]}-{list[3]}hs
            {list[4] && " y " + list[4] + "-" + list[5] + "hs"}
          </li>
        ))}
      </ol>
    </div>
  );
}
