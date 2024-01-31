import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchCaptionBoldIcon = (
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
      <path d='M6 4.625V5q-.023.352-.375.375h-2.25Q3.023 5.352 3 5v-.375h-.75a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v8.25q0 .328.21.54.212.21.54.21h4.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-8.25a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zm-5.625.75q.023-.797.54-1.336.538-.515 1.335-.539h4.5q.797.023 1.336.54.515.538.539 1.335v8.25q-.023.797-.54 1.336-.538.515-1.335.539h-4.5q-.797-.023-1.336-.54-.515-.538-.539-1.335z' />
    </g>
    <defs>
      <clipPath id='03927813cf1dd23b__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchCaptionBoldIcon);
export default ForwardRef;
