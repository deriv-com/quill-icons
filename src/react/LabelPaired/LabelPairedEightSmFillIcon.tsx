import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.438 8.125a3.5 3.5 0 0 1-.985 2.434c.848.656 1.422 1.668 1.422 2.816 0 1.941-1.586 3.5-3.5 3.5h-1.75a3.49 3.49 0 0 1-3.5-3.5c0-1.148.547-2.16 1.422-2.816-.629-.63-.984-1.477-.984-2.434 0-1.914 1.558-3.5 3.5-3.5h.875c1.914 0 3.5 1.586 3.5 3.5m-3.5 3.5H3.625c-.984 0-1.75.793-1.75 1.75 0 .984.766 1.75 1.75 1.75h1.75c.957 0 1.75-.766 1.75-1.75 0-.957-.793-1.75-1.75-1.75zm0-1.75c.957 0 1.75-.766 1.75-1.75 0-.957-.793-1.75-1.75-1.75h-.875c-.985 0-1.75.793-1.75 1.75 0 .984.765 1.75 1.75 1.75z' />
    </g>
    <defs>
      <clipPath id='dd5fc50ed02cb062957c4295b0e6ee51__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightSmFillIcon);
export default ForwardRef;
