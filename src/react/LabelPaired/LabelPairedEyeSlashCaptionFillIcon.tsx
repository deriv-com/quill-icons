import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashCaptionFillIcon = (
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
      <path d='m.89 3.64 2.626 2.04C4.57 4.883 5.883 4.25 7.5 4.25c1.875 0 3.398.867 4.5 1.898 1.102 1.008 1.828 2.227 2.18 3.07a.84.84 0 0 1 0 .587c-.305.75-.938 1.828-1.875 2.765l2.46 1.946c.258.187.305.539.094.773a.518.518 0 0 1-.773.094L.21 4.508a.518.518 0 0 1-.094-.774.518.518 0 0 1 .774-.093m4.337 3.376L7.336 8.68c.094-.211.164-.422.164-.657 0-.187-.047-.328-.094-.492-.023-.117.047-.281.188-.258.96.024 1.804.68 2.062 1.665a2.26 2.26 0 0 1-.094 1.476l.891.703a3.4 3.4 0 0 0 .422-1.617A3.39 3.39 0 0 0 7.5 6.125c-.89 0-1.687.352-2.273.89m3.515 5.625L10.453 14a6.14 6.14 0 0 1-2.953.75c-1.898 0-3.422-.844-4.523-1.875-1.102-1.031-1.829-2.25-2.18-3.07a.84.84 0 0 1 0-.586 9.4 9.4 0 0 1 1.148-1.922L4.148 9.03c-.023.164-.023.328-.023.469 0 1.875 1.5 3.375 3.375 3.375.422 0 .844-.07 1.242-.234' />
    </g>
    <defs>
      <clipPath id='48c9508a3c7c99b01d6daedcbf5a634b__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashCaptionFillIcon);
export default ForwardRef;
