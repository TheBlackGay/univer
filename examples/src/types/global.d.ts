/**
 * 全局扩展类型定义
 */

interface Window {
  /**
   * Univer保存API，用于与后端交互
   */
  univerSaveAPI: {
    /**
     * 保存当前工作簿到后端
     * @param name 工作簿名称
     * @returns 工作簿ID
     */
    saveWorkbook(name: string): Promise<string>;
    
    /**
     * 向工作表追加数据
     * @param workbookId 工作簿ID
     * @param sheetId 工作表ID
     * @param data 二维数组数据
     * @returns 是否成功
     */
    appendData(workbookId: string, sheetId: string, data: any[][]): Promise<boolean>;
  };
} 