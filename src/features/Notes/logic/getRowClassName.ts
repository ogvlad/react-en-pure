export const getRowClassName = (args: any): string => {
  const { row } = args
  if (!row) return ""
  // if (row.pid === "") return "Assessments-ItemRow"
  if (row.pid === "") return "section-title"
  if (row.pid !== "") return "section-item"
  // if (row.treeDataPath && row.treeDataPath.length > 1) return "Assessments-ItemRow Assessments-SectionItem Assessments-Form Assessments-Form-NonDraggable"
  
  return ""
}
