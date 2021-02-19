import React from 'react';
import classes from './Posts.module.css'
import {NavLink} from "react-router-dom";


const Posts = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p && classes.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
                })
            }

        </div>

        {props.users.map(u => <div key={u.id} className={classes.posts}>
                    <div className={classes.img}>
                        <NavLink to={'content/' + u.id}>
                            <img src={!u.photos.small ? props.noName : u.photos.small} alt=""/>
                        </NavLink>
                        {u.follow ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            return (props.followThunk(u.id));
                            }}>unfollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                return  (props.unFollowThunk(u.id))
                            }}>follow</button>}
                    </div>
                    <div className={classes.card}>
                        <div className={classes.name}>
                            <p>{u.name}</p>
                            <p>{u.postText}</p>
                        </div>
                        <div className={classes.from}>
                            <p>'u.location.country'</p>
                            <p>'u.location.city'</p>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}
export default Posts;
