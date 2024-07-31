import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTrashXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M7.5 12c-.422 0-.75.375-.75.75 0 .422.328.75.75.75h9c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75h-1.969l-.515-.516a.75.75 0 0 0-.516-.234h-3a.78.78 0 0 0-.562.234L9.422 12zm0 3 .61 7.64c.046.797.703 1.36 1.5 1.36h4.734c.797 0 1.453-.562 1.5-1.36L16.5 15z' />
    </g>
    <defs>
      <clipPath id='acd9a77a2194fb789d3460d06494f175__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTrashXlFillIcon);
export default ForwardRef;
