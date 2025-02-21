import type { TypeStatusWiseTask } from "@/app/entity/Tasks";
import { useEffect, useState } from "react";

const useFetchTasksQuery = () => {
	const [list, setList] = useState<TypeStatusWiseTask>();
	useEffect(() => {
		async function doValue() {
			const respo = await fetch("/api/tasks");
			const result: TypeStatusWiseTask = await respo.json();
			setList(result);
		}
		doValue();
	}, []);
	return list;
};

export default useFetchTasksQuery;
