import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopLossXlFillIcon = (
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
      <path d='M6.89 24.703a7.5 7.5 0 0 1-2.156-1.64l-.468-.563 2.859-2.86.516.563c.703.844 1.547 1.219 2.578 1.219.61 0 .89-.14 1.031-.235.14-.14.188-.28.188-.515s-.047-.328-.094-.422c-.047 0-.047-.047-.14-.094a1.8 1.8 0 0 0-.563-.093l-1.22-.188c-1.452-.187-2.624-.61-3.374-1.406H6c-.75-.844-1.078-1.875-1.078-3.094 0-.656.094-1.266.375-1.828a5 5 0 0 1 1.125-1.5 5.1 5.1 0 0 1 1.734-.89c.656-.235 1.406-.329 2.203-.329 1.032 0 1.97.14 2.813.516.797.328 1.5.844 2.11 1.5l.468.515-2.86 2.907-.562-.61a4 4 0 0 0-.844-.656h-.046a2.6 2.6 0 0 0-1.22-.281c-.562 0-.843.14-.937.187-.094.094-.14.14-.14.328 0 .141.046.235.046.282s.047.046.047.046c.094.094.329.188.797.282l1.219.187c1.36.188 2.531.657 3.281 1.407.797.75 1.172 1.828 1.172 3.046 0 .703-.14 1.36-.375 1.97A4.24 4.24 0 0 1 14.156 24c-.469.422-1.078.75-1.781.984-.703.235-1.5.328-2.297.328-1.219 0-2.25-.187-3.14-.609zm9.563.422V11.063h4.266v10.125H25.5v3.937z' />
    </g>
    <defs>
      <clipPath id='cc18d7861b3892c9d72a93f82c0ea4be__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossXlFillIcon);
export default ForwardRef;
