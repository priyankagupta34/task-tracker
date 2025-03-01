import type { TypeTask } from "@/app/entity/Tasks";
import { useEffect, useState } from "react";

const useFetchTaskQuery = (id: number | undefined) => {
	const [task, settask] = useState<TypeTask | undefined>();

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		if (id) {
			async function refetch(): Promise<TypeTask> {
				const respo = await fetch(`/api/tasks/${id}`);
				const result: TypeTask = await respo.json();
				settask(result);
				return result;
			}
			refetch();
		}
	}, [id]);
	return task;
};

export default useFetchTaskQuery;
