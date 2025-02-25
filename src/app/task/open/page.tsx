"use client";

import TaskComponent from "@/component/TaskComponent";
import { useRouter } from "next/navigation";

export default function TaskData() {
	const router = useRouter();
	// return <div>jkkk</div>;
	return (
		<TaskComponent open taskId={822666} closeModal={() => router.back()} />
	);
}
