import React, { useEffect, useState } from "react";
import { CardBasic } from "../cards";
import Chip from "../Chip";
import { Universe } from "@/types/universe";
import { formatSouls } from "@/utils/formatSouls";

const HomeUniverse = () => {
  const [universes, setUniverses] = useState<Universe[]>([]);
  useEffect(() => {
    fetch("/api/universe?sort=souls&limit=10")
      .then((res) => res.json())
      .then(setUniverses);
  }, []);
  return (
    <CardBasic title="Universes" className="w-full">
      <div className="w-full py-4">
        <ul>
          {universes.map((item) => (
            <li
              className="flex justify-between items-center py-2"
              key={item.id}
            >
              <Chip label={item.name} />
              <p className="text-text-xs text-textDarkTertiary">
                {formatSouls(item.souls)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </CardBasic>
  );
};

export default HomeUniverse;
