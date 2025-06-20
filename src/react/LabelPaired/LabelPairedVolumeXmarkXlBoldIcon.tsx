import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.453 15.469a1.03 1.03 0 0 1-.703.281H2.625a.37.37 0 0 0-.375.375v3.75c0 .234.14.375.375.375H6.75c.234 0 .516.14.703.328l5.297 4.64v-14.39zm6.14-7.969c.75 0 1.407.656 1.407 1.406v18.235c0 .75-.656 1.359-1.406 1.359-.375 0-.703-.094-.938-.328L6.281 22.5H2.625A2.62 2.62 0 0 1 0 19.875v-3.75C0 14.719 1.172 13.5 2.625 13.5h3.656l6.375-5.625a1.3 1.3 0 0 1 .938-.375m6.329 6.328 2.578 2.578 2.578-2.578a1.103 1.103 0 0 1 1.547 0c.469.469.469 1.172 0 1.594L24.047 18l2.578 2.578c.469.469.469 1.172 0 1.594a1.027 1.027 0 0 1-1.547 0L22.5 19.594l-2.578 2.578c-.469.469-1.172.469-1.594 0-.469-.422-.469-1.125 0-1.594L20.906 18l-2.578-2.578c-.469-.422-.469-1.125 0-1.594.422-.422 1.125-.422 1.594 0' />
    </g>
    <defs>
      <clipPath id='030f09db59666a2d4039fa873649472c__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkXlBoldIcon);
export default ForwardRef;
