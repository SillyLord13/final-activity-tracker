module.exports = (sequelize, DataTypes) =>{
    let Activity = sequelize.define('Activity',{
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hours: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        medium: {
            type: DataTypes.STRING,
            allowNull: false
        },
        complete:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Notes: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    Activity.sync({force:false}).then(()=>{
        console.log('Synced activity table')
    })
    return Activity
}