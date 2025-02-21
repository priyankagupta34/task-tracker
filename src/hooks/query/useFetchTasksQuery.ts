import type { TypeStatusWiseTask } from "@/app/entity/Tasks";
import { useEffect, useState } from "react";

type FetchQuery = {
	statusTasks: undefined | TypeStatusWiseTask;
	refetch: () => Promise<TypeStatusWiseTask>;
};
const useFetchTasksQuery = () => {
	const [list, setList] = useState<TypeStatusWiseTask>();
	async function refetch(): Promise<TypeStatusWiseTask> {
		const respo = await fetch("/api/tasks");
		const result: TypeStatusWiseTask = await respo.json();
		setList(result);
		return result;
	}
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		refetch();
	}, []);
	return { statusTasks: list, refetch } as FetchQuery;
};

export default useFetchTasksQuery;
