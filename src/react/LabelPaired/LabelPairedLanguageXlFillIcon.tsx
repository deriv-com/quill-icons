import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageXlFillIcon = (
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
      <path d='M0 12c0-1.64 1.313-3 3-3h24c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm15 0v12h12V12zm-6.656 2.25a.98.98 0 0 0-.844-.562c-.375 0-.75.234-.89.562l-3 6.75c-.188.469 0 1.031.468 1.266.516.187 1.031 0 1.266-.47l.422-.983h3.422l.421.984c.235.469.797.656 1.266.469.469-.235.656-.797.469-1.266zM7.5 16.969l.89 1.968H6.61zM21 13.687a.94.94 0 0 1 .938.938v.188h2.812a.94.94 0 0 1 .938.937.94.94 0 0 1-.938.938h-.094l-.093.234c-.422 1.125-1.032 2.203-1.875 3.047.046.047.093.047.14.093l.89.516c.423.281.563.844.329 1.313a1.02 1.02 0 0 1-1.313.328l-.843-.563c-.235-.093-.422-.234-.657-.375-.468.328-.984.657-1.593.89l-.141.095c-.469.187-1.031 0-1.266-.47-.187-.515.047-1.03.516-1.265l.14-.047c.329-.14.61-.328.891-.468l-.562-.563a.96.96 0 0 1 0-1.36c.328-.374.937-.374 1.312 0l.657.704h.046a8.3 8.3 0 0 0 1.407-2.11h-5.016a.94.94 0 0 1-.937-.937.94.94 0 0 1 .937-.937h2.438v-.188a.94.94 0 0 1 .937-.937' />
    </g>
    <defs>
      <clipPath id='9ee0a740fa5cd7ea031f0649972b8f25__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageXlFillIcon);
export default ForwardRef;
