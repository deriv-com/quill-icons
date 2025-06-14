import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperclipLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.898 8.352a2.64 2.64 0 0 0-3.71 0l-7.461 7.5c-1.72 1.718-1.72 4.492 0 6.171 1.68 1.72 4.453 1.72 6.171 0l5.938-5.937a.92.92 0 0 1 1.289 0c.39.39.39.977 0 1.328l-5.898 5.938c-2.461 2.46-6.407 2.46-8.829 0-2.46-2.422-2.46-6.368 0-8.829l7.5-7.5c1.72-1.718 4.57-1.718 6.329 0 1.718 1.758 1.718 4.61 0 6.329l-7.188 7.187a2.932 2.932 0 0 1-4.375-.234c-.937-1.172-.82-2.852.234-3.907l5.938-5.937a.92.92 0 0 1 1.289 0c.39.39.39.976 0 1.328l-5.898 5.938c-.391.39-.43.976-.079 1.406.391.469 1.094.547 1.563.078l7.187-7.188a2.593 2.593 0 0 0 0-3.671' />
    </g>
    <defs>
      <clipPath id='f8dedbcc478cc18b6faac2a2f1d62d9b__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperclipLgBoldIcon);
export default ForwardRef;
