import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoXlFillIcon = (
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
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m-1.594-15.328c.375-.235.75-.375 1.219-.375h.14c.938 0 1.735.797 1.735 1.734 0 .469-.234.938-.562 1.266l-5.11 4.781a1.18 1.18 0 0 0-.281 1.219c.187.422.61.703 1.078.703h6.75a1.11 1.11 0 0 0 1.125-1.125 1.14 1.14 0 0 0-1.125-1.125h-3.937l3.046-2.812c.797-.75 1.22-1.782 1.22-2.907 0-2.156-1.735-3.937-3.892-3.984h-.187c-.937 0-1.828.281-2.578.844l-1.125.843c-.516.375-.61 1.125-.234 1.594.375.516 1.125.61 1.593.235z' />
    </g>
    <defs>
      <clipPath id='77f9e5dfe5490085788ab52da3d7d588__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoXlFillIcon);
export default ForwardRef;
