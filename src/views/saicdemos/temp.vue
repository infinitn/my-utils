<template>
  <a-table
    :columns="columns"
    :dataSource="treeData"
    :childrenColumnName="'children'"
    rowKey="id"
    bordered
  />
</template>

<script>
export default {
  data() {
    return {
      // 原始树形数据
      rawData: [
        {
          id: '1',
          name: '部门A',
          type: '部门',
          count: 40,
          children: [
            { id: '1-1', name: '小组1', type: '小组', count: 20 },
            { id: '1-2', name: '小组2', type: '小组', count: 20 }
          ]
        },
        {
          id: '2',
          name: '部门B',
          type: '部门',
          count: 35,
          children: [
            { id: '2-1', name: '小组3', type: '小组', count: 15 },
            { id: '2-2', name: '小组4', type: '小组', count: 20 }
          ]
        }
      ],
      columns: [
        {
          title: '名称',
          dataIndex: 'name',
          customRender: (value, index, row) => {
            // 如果是父节点，合并两行
            if (value.type === '部门') {
              return {
                children: value,
                attrs: {
                  rowSpan: value.children ? value.children.length + 1 : 1
                }
              };
            }
            // 子节点不显示
            return {
              children: value,
              attrs: {
                rowSpan: 0
              }
            };
          }
        },
        {
          title: '类型',
          dataIndex: 'type',
          customRender: (value, row) => {
            // 只在父节点显示类型
            if (value.type === '部门') {
              return value;
            }
            return '';
          }
        },
        {
          title: '人数',
          dataIndex: 'count'
        }
      ]
    };
  },
  computed: {
    // 处理后的树形数据
    treeData() {
      return this.rawData.map(item => {
        // 这里可以添加其他数据处理逻辑
        return item;
      });
    }
  }
};
</script>
