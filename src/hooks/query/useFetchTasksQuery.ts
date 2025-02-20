import type { TypeListTask, TypeTask } from "@/app/entity/Tasks";
import { useEffect, useState } from "react";

const useFetchTasksQuery = () => {
	const [list, setList] = useState<TypeTask[]>([]);
	useEffect(() => {
		async function doValue() {
			const respo = await fetch("/api/tasks");
			const result: TypeListTask = await respo.json();
			setList(result.tasks);
		}
		doValue();
	}, []);
	return list;
};

export default useFetchTasksQuery;
