import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashXlBoldIcon = (
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
      <path d='M8.297 8.25c-.14 0-.235.094-.328.188l-.89 1.312h6.796l-.89-1.312a.4.4 0 0 0-.329-.188zm8.297 1.5h3.281c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 19.875 12h-.562l-1.125 15.234c-.141 1.594-1.407 2.766-3 2.766H5.765c-1.594 0-2.86-1.172-3-2.766L1.64 12h-.516C.469 12 0 11.531 0 10.875c0-.61.469-1.125 1.125-1.125H4.36l1.734-2.578A2.69 2.69 0 0 1 8.297 6h4.36c.89 0 1.734.469 2.202 1.172zm.468 2.25H3.892l1.125 15.094a.76.76 0 0 0 .75.656h9.422a.76.76 0 0 0 .75-.656z' />
    </g>
    <defs>
      <clipPath id='8a8a3fc37932194f6a6e22b990b5163b__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashXlBoldIcon);
export default ForwardRef;
