import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.215 4.625a.43.43 0 0 0-.356.219l-.437.656H8.55l-.438-.656a.43.43 0 0 0-.355-.219zm4.348.875h2.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-.52l-.684 9.762c-.082.93-.82 1.613-1.75 1.613H3.738a1.756 1.756 0 0 1-1.75-1.613l-.683-9.762H.813a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438H3.41l.711-1.121a1.29 1.29 0 0 1 1.094-.629h2.543c.437 0 .875.246 1.12.629zm1.23.875H2.18l.683 9.707c.028.438.41.793.875.793h5.496c.465 0 .848-.355.875-.793z' />
    </g>
    <defs>
      <clipPath id='2552c1ecf9c86cf17d420a0ca3584452__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashSmRegularIcon);
export default ForwardRef;
