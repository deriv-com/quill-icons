import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.867 9.5 6 13.227v-7.43zM6.047 5a.72.72 0 0 1 .703.703v2.438l4.125-3A.65.65 0 0 1 11.297 5a.72.72 0 0 1 .703.703v7.594a.705.705 0 0 1-.703.703.8.8 0 0 1-.422-.117l-4.125-3v2.414a.705.705 0 0 1-.703.703.8.8 0 0 1-.422-.117L.211 9.969A.59.59 0 0 1 0 9.5c0-.164.07-.328.21-.445L5.626 5.14A.65.65 0 0 1 6.047 5m.703 4.969 4.5 3.258v-7.43l-4.5 3.258z' />
    </g>
    <defs>
      <clipPath id='1ca7b93045061012ab63f9db1d443180__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardCaptionRegularIcon);
export default ForwardRef;
