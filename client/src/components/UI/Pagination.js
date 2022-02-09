import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import { Pagination, PaginationItem } from "@material-ui/lab";
import useStyles from "./style";

/**
* @author
* @function Paginate
**/

const Paginate = ({ page }) => {
    const { totalNumberOfPages } = useSelector(state => state.movie);
    const classes = useStyles();

    return(
        <Pagination 
            classes={{ ul: classes.ul }}
            count={totalNumberOfPages}
            defaultPage={1}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            onChange={ () => { scroll.scrollToTop(); } }
            renderItem={(item) => (
                <PaginationItem {...item} component={ Link } to={`/movies?page=${item.page}`} />
            )}

        />
    )
}

export default Paginate;