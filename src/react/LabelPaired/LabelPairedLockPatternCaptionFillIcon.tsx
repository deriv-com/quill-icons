import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockPatternCaptionFillIcon = (
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
      <path d='M1.5 5c0-.82.656-1.5 1.5-1.5.54 0 1.031.305 1.29.75h1.898c.257-.445.75-.75 1.312-.75.54 0 1.031.305 1.29.75h1.898c.257-.445.75-.75 1.312-.75.82 0 1.5.68 1.5 1.5 0 .844-.68 1.5-1.5 1.5-.14 0-.281 0-.398-.047L8.93 9.125c.047.117.07.258.07.375 0 .844-.68 1.5-1.5 1.5-.14 0-.281 0-.398-.047L4.805 13.25h1.383c.257-.445.75-.75 1.312-.75.54 0 1.031.305 1.29.75h1.898c.257-.445.75-.75 1.289-.75.843 0 1.5.68 1.5 1.5 0 .844-.657 1.5-1.5 1.5-.54 0-1.032-.281-1.29-.75H8.79c-.258.469-.75.75-1.312.75-.54 0-1.032-.281-1.29-.75H4.29c-.258.469-.75.75-1.289.75A1.48 1.48 0 0 1 1.5 14c0-.82.656-1.5 1.5-1.5.117 0 .258.023.375.07l2.672-2.672a1.1 1.1 0 0 1-.07-.398c0-.82.68-1.5 1.5-1.5.14 0 .28.023.398.07l2.297-2.32H8.789c-.258.469-.75.75-1.312.75-.54 0-1.032-.281-1.29-.75H4.29c-.258.469-.75.75-1.289.75A1.48 1.48 0 0 1 1.5 5m0 4.5c0 .54.281 1.031.75 1.313a1.55 1.55 0 0 0 1.5 0c.445-.282.75-.774.75-1.313 0-.516-.305-1.008-.75-1.29a1.55 1.55 0 0 0-1.5 0c-.469.282-.75.774-.75 1.29m9 0c0 .54.281 1.031.75 1.313a1.55 1.55 0 0 0 1.5 0c.445-.282.75-.774.75-1.313 0-.516-.305-1.008-.75-1.29a1.55 1.55 0 0 0-1.5 0c-.469.282-.75.774-.75 1.29' />
    </g>
    <defs>
      <clipPath id='a95ab29358e31d3b0c7b9e9ca9a4de90__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockPatternCaptionFillIcon);
export default ForwardRef;
