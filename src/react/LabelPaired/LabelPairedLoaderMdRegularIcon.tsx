import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLoaderMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.5 4.5v3c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-3c0-.25.219-.5.5-.5.25 0 .5.25.5.5m0 12v3c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-3c0-.25.219-.5.5-.5.25 0 .5.25.5.5M0 12c0-.25.219-.5.5-.5h3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-3A.494.494 0 0 1 0 12m12.5-.5h3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-3a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5m1.156-5.156c.188.218.188.531 0 .718l-2.125 2.125c-.219.188-.531.188-.719 0-.187-.187-.187-.5 0-.718l2.126-2.125c.187-.188.5-.188.718 0m-8.5 9.218-2.125 2.094a.442.442 0 0 1-.687 0 .442.442 0 0 1 0-.687l2.094-2.125c.218-.188.53-.188.718 0 .188.187.188.5 0 .719M2.344 6.345a.49.49 0 0 1 .687 0l2.125 2.125c.188.219.188.531 0 .719-.187.187-.5.187-.718 0L2.344 7.062c-.219-.187-.219-.5 0-.718m9.187 8.5 2.125 2.125a.49.49 0 0 1 0 .687c-.219.219-.531.219-.719 0l-2.124-2.093c-.188-.22-.188-.532 0-.72.187-.187.5-.187.718 0' />
    </g>
    <defs>
      <clipPath id='659fd6a08876f5133bb80b6f87808a56__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLoaderMdRegularIcon);
export default ForwardRef;
