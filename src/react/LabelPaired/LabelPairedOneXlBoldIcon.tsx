import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={36}
    viewBox='0 0 12 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.125 8.625V26.25h3.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-9.75C.469 28.5 0 28.031 0 27.375c0-.61.469-1.125 1.125-1.125h3.75V10.64l-3.187 1.97c-.516.328-1.22.14-1.547-.376-.328-.515-.141-1.218.375-1.546l4.875-3c.328-.235.797-.235 1.125-.047.375.234.609.609.609.984' />
    </g>
    <defs>
      <clipPath id='d90045c92a39eb8d9e5f66e97f85d7b1__a'>
        <path d='M0 0h12v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneXlBoldIcon);
export default ForwardRef;
