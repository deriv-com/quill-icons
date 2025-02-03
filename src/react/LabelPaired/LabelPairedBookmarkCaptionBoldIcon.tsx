import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 4.625C0 4.015.492 3.5 1.125 3.5v10.359l3.047-2.18a.56.56 0 0 1 .656 0l3.047 2.18V4.625h-6.75V3.5h6.75C8.485 3.5 9 4.016 9 4.625v10.313c0 .21-.117.421-.305.515a.58.58 0 0 1-.586-.047L4.5 12.828.867 15.406a.54.54 0 0 1-.562.047.58.58 0 0 1-.305-.515z' />
    </g>
    <defs>
      <clipPath id='af40f7b6c99cb5eab6e4365cd399dfee__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkCaptionBoldIcon);
export default ForwardRef;
