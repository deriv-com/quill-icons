import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightUserTieCircleDollarXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 28.594c0-3.703 2.625-6.797 6.14-7.453.329-.047.657.14.75.422l1.548 3.234c.328-.985.656-2.016.984-3.047h-.469c-.375 0-.75-.328-.75-.75 0-.375.375-.75.75-.75h3c.422 0 .75.375.75.75a.74.74 0 0 1-.75.75h-.422c.328 1.031.656 2.063.985 3.047.515-1.078 1.03-2.156 1.5-3.235a.79.79 0 0 1 .797-.421c.14.047.28.047.421.093A8.2 8.2 0 0 0 15 23.11c-.844 1.782-1.64 3.516-2.484 5.297 0 .047-.047.094-.047.094h4.406c.469.61.984 1.078 1.594 1.5H1.406C.61 30 0 29.39 0 28.594m1.5-.094h6.984s-.046-.047-.046-.094c-.891-1.875-1.735-3.75-2.626-5.625A5.95 5.95 0 0 0 1.5 28.5m3-16.5c0-2.11 1.125-4.125 3-5.156 1.828-1.078 4.125-1.078 6 0 1.828 1.031 3 3.047 3 5.156 0 2.156-1.172 4.125-3 5.203-1.875 1.078-4.172 1.078-6 0A5.97 5.97 0 0 1 4.5 12m2.063-2.25c-.797 1.406-.797 3.14 0 4.5.843 1.406 2.296 2.25 3.937 2.25a4.47 4.47 0 0 0 3.89-2.25c.797-1.36.797-3.094 0-4.5-.796-1.36-2.296-2.25-3.89-2.25-1.64 0-3.094.89-3.937 2.25m2.765 17.063c.188.328.328.656.469.984a.758.758 0 0 0 1.36 0c.14-.328.327-.656.468-.985-.375-1.125-.75-2.296-1.125-3.421zM16.5 23.25c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C30 27 26.953 30 23.25 30c-3.75 0-6.75-3-6.75-6.75m1.5 0a5.24 5.24 0 0 0 5.25 5.25c2.86 0 5.25-2.344 5.25-5.25 0-2.86-2.39-5.25-5.25-5.25-2.906 0-5.25 2.39-5.25 5.25m2.625-1.266c-.047-.89.469-1.453 1.031-1.734a2.2 2.2 0 0 1 .844-.281V19.5a.74.74 0 0 1 .75-.75c.375 0 .75.328.75.75v.469c.281.047.563.093.797.14.422.094.656.516.562.938-.093.375-.515.656-.89.515-.469-.093-.844-.187-1.266-.187-.281 0-.61.094-.844.188-.14.093-.187.14-.234.187v.14c0 .047 0 .094.188.235.28.14.656.234 1.125.375h.046c.422.14.985.281 1.407.563.468.28.937.75.984 1.5 0 .843-.469 1.406-1.031 1.734q-.423.21-.844.281v.516c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-.563c-.422-.047-.797-.187-1.125-.281-.094-.047-.187-.047-.234-.094-.422-.093-.61-.515-.516-.937.14-.375.563-.61.938-.469.093 0 .187.047.28.047.563.187.985.328 1.407.328.328 0 .656-.047.89-.14l.188-.188s.047-.094.047-.188c0-.093-.047-.14-.234-.28-.235-.142-.61-.235-1.078-.376-.047 0-.094 0-.094-.047-.422-.093-.938-.234-1.36-.468-.468-.235-.937-.704-.984-1.454' />
    </g>
    <defs>
      <clipPath id='85153903de4139f575f729c4713447d4__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightUserTieCircleDollarXlRegularIcon);
export default ForwardRef;
