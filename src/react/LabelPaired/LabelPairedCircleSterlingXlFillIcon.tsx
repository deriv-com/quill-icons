import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingXlFillIcon = (
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
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m.234-16.5c.188 0 .375.047.516.14l1.453.563c.563.235 1.219-.047 1.453-.656a1.12 1.12 0 0 0-.61-1.453l-1.452-.563a3.4 3.4 0 0 0-1.36-.281c-2.015 0-3.656 1.688-3.656 3.703V16.5H8.25c-.422 0-.75.375-.75.75 0 .422.328.75.75.75h.328v.516c0 .75-.14 1.547-.515 2.25l-.47.843c-.187.375-.14.797.048 1.125.187.328.562.516.984.516h6.75a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 15.375 21h-4.969q.422-1.195.422-2.531V18h1.922c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75h-1.922v-1.547c0-.797.61-1.453 1.406-1.453' />
    </g>
    <defs>
      <clipPath id='ccec2583fd4fddaa13524598155e59df__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingXlFillIcon);
export default ForwardRef;
