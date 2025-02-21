import type { TypeStatus } from "@/app/entity/Tasks";
import type { BackgroundColor } from "./entities";
import Text from "./Text";
import { getChipsColor } from "./utils";

type ChipsProps = {
	value: string;
	status: TypeStatus;
	color?: BackgroundColor;
};

export default function Chips({
	value,
	status,
	color = "bg-cyan-300",
}: ChipsProps) {
	return (
		<div
			className={`w-fit px-2 py-1 rounded-md shadow-md ${color} ${getChipsColor(status)}`}
		>
			<Text
				fontWeight="font-bold"
				color="text-gray-600"
				textTranform="capitalize"
			>
				{value}
			</Text>
		</div>
	);
}
