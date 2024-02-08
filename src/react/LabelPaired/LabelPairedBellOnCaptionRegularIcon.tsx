import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.203 3.71q.141.306-.164.493l-1.5.75q-.328.142-.492-.164-.141-.329.164-.492l1.5-.75q.304-.141.492.164m-7.078.165q.023-.352.375-.375.352.023.375.375v.398q1.454.165 2.39 1.196.962 1.03.985 2.531v.68a3.9 3.9 0 0 0 1.125 2.742l.07.07a1 1 0 0 1 .305.727.94.94 0 0 1-.305.726.94.94 0 0 1-.726.305H3.28a.94.94 0 0 1-.726-.305.94.94 0 0 1-.305-.726q0-.421.305-.75l.07-.047A3.9 3.9 0 0 0 3.75 8.68V8q.047-1.5.984-2.531.938-1.032 2.391-1.196zM7.5 5q-1.266.024-2.133.867Q4.524 6.735 4.5 8v.68q-.024 1.898-1.36 3.258l-.046.07a.3.3 0 0 0-.094.21q.024.259.281.282h8.438q.258-.024.281-.281a.3.3 0 0 0-.094-.211l-.047-.07q-1.335-1.36-1.359-3.258V8q-.024-1.266-.89-2.133Q8.765 5.024 7.5 5m-.703 9.258q.188.468.703.492.516-.024.703-.492.141-.328.492-.235.305.14.211.47-.164.444-.539.726-.375.28-.867.281-.492 0-.867-.281t-.54-.727q-.093-.328.212-.469.351-.093.492.235M0 7.625q.023-.352.375-.375H2.25q.352.023.375.375-.023.352-.375.375H.375Q.023 7.977 0 7.625m12.75-.375h1.875q.352.023.375.375-.023.352-.375.375H12.75q-.352-.023-.375-.375.023-.352.375-.375M.96 4.203q-.303-.187-.163-.492.164-.305.492-.164l1.5.75q.305.164.164.492-.164.305-.492.164z' />
    </g>
    <defs>
      <clipPath id='613f110c0c102862db4d66930c97e4bc__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnCaptionRegularIcon);
export default ForwardRef;
