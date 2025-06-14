import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.297 7.5c-.235 0-.469.14-.61.375L6.938 9h7.079l-.75-1.125c-.141-.234-.375-.375-.61-.375zM15.75 9h4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-.89l-1.172 16.734c-.141 1.594-1.407 2.766-3 2.766H5.765a3.01 3.01 0 0 1-3-2.766L1.594 10.5H.75A.74.74 0 0 1 0 9.75C0 9.375.328 9 .75 9h4.453l1.219-1.922A2.2 2.2 0 0 1 8.297 6h4.36c.75 0 1.5.422 1.921 1.078zm2.11 1.5H3.093l1.172 16.64c.046.75.703 1.36 1.5 1.36h9.422c.796 0 1.453-.61 1.5-1.36z' />
    </g>
    <defs>
      <clipPath id='b53baf450703618cc1948f574dd4ab56__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashXlRegularIcon);
export default ForwardRef;
