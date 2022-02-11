import StyleSheet from "./StyleSheet";

export const flexStyles = StyleSheet.create({
    f1: { flex: 1 },
    f2: { flex: 2 },
    f3: { flex: 3 },
    f4: { flex: 4 },
    f5: { flex: 5 },
    f6: { flex: 6 },
    f7: { flex: 7 },
    f8: { flex: 8 },
    f9: { flex: 9 },
    f10: { flex: 10 },
    f11: { flex: 11 },
    f12: { flex: 12 },
    c: {
        justifyContent:'center',
        alignItems:'center'
    },
    col: {
        flexDirection:'column'
    },
    // column : mainAxis => flex-start
    col_fs_fs: {
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    col_fs_c: {
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    col_fs_fe: {
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-end',
    },
    col_fs_bl: {
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'baseline',
    },
    col_fs_st: {
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'stretch',
    },
    // column : mainAxis => center
    col_c_fs: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
    },
    col_c_c: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    col_c_fe: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-end',
    },
    col_c_bl: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'baseline',
    },
    col_c_st: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'stretch',
    },
    // column : mainAxis => flex-end
    col_fe_fs: {
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'flex-start',
    },
    col_fe_c: {
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    col_fe_fe: {
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    col_fe_bl: {
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'baseline',
    },
    col_fe_st: {
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'stretch',
    },
    // column : mainAxis => space-between
    col_sb_fs: {
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'flex-start',
    },
    col_sb_c: {
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
    },
    col_sb_fe: {
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    col_sb_bl: {
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'baseline',
    },
    col_sb_st: {
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'stretch',
    },
    // column : mainAxis => space-around
    col_sa_fs: {
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'flex-start',
    },
    col_sa_c: {
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
    },
    col_sa_fe: {
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'flex-end',
    },
    col_sa_bl: {
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'baseline',
    },
    col_sa_st: {
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'stretch',
    },
    // column : mainAxis => space-evenly
    col_se_fs: {
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'flex-start',
    },
    col_se_c: {
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    col_se_fe: {
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'flex-end',
    },
    col_se_bl: {
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'baseline',
    },
    col_se_st: {
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'stretch',
    },
    // column
    row: {
        flexDirection:'row'
    },
    // row : mainAxis => flex-start
    row_fs_fs: {
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    row_fs_c: {
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    row_fs_fe: {
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-end',
    },
    row_fs_bl: {
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'baseline',
    },
    row_fs_st: {
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'stretch',
    },
    // row : mainAxis => center
    row_c_fs: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-start',
    },
    row_c_c: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    row_c_fe: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
    },
    row_c_bl: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'baseline',
    },
    row_c_st: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'stretch',
    },
    // row : mainAxis => flex-end
    row_fe_fs: {
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-start',
    },
    row_fe_c: {
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    row_fe_fe: {
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    row_fe_bl: {
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'baseline',
    },
    row_fe_st: {
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'stretch',
    },
    // row : mainAxis => space-between
    row_sb_fs: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
    },
    row_sb_c: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    row_sb_fe: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    row_sb_bl: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'baseline',
    },
    row_sb_st: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'stretch',
    },
    // row : mainAxis => space-around
    row_sa_fs: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-start',
    },
    row_sa_c: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    row_sa_fe: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
    },
    row_sa_bl: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'baseline',
    },
    row_sa_st: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'stretch',
    },
    // row : mainAxis => space-evenly
    row_se_fs: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'flex-start',
    },
    row_se_c: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    row_se_fe: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'flex-end',
    },
    row_se_bl: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'baseline',
    },
    row_se_st: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'stretch',
    },

    // align-self
    as_fs: {
        alignSelf:'flex-start'
    },
    as_c: {
        alignSelf:'center'
    },
    as_fe: {
        alignSelf:'flex-end'
    },
    as_st: {
        alignSelf:'stretch'
    },
    as_bl: {
        alignSelf:'baseline'
    },
    as_at: {
        alignSelf:'auto'
    },

    //align-content
    ac_fs: {
        alignContent: 'flex-start'
    },
    ac_c: {
        alignContent: 'center'
    },
    ac_fe: {
        alignContent: 'flex-end'
    },
    ac_sb: {
        alignContent: 'space-between'
    },
    ac_sa: {
        alignContent: 'space-around'
    },
    ac_st: {
        alignContent: 'stretch'
    },
})