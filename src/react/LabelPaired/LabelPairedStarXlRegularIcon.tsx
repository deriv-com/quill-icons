import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.594 13.922c-.235.469-.656.75-1.125.844l-6.422.937 4.64 4.64c.375.329.516.845.422 1.313L7.031 28.22l5.719-3.094a1.59 1.59 0 0 1 1.453 0l5.719 3.094-1.078-6.563c-.094-.468.047-.984.422-1.312l4.64-4.64-6.422-.938c-.515-.094-.937-.375-1.125-.844l-2.906-5.906zm9.281 15.984h.047L13.5 26.438l-6.422 3.468c-.375.188-.844.14-1.219-.093-.328-.282-.515-.704-.421-1.125l1.218-7.266-5.203-5.156a1.1 1.1 0 0 1-.281-1.172c.14-.375.469-.703.89-.75l7.172-1.078 3.235-6.61c.187-.375.562-.656.984-.656.469 0 .844.281 1.031.656l3.235 6.61 7.172 1.078c.422.047.75.375.89.75.14.422.047.844-.281 1.172l-5.203 5.156 1.219 7.265c.093.422-.094.844-.422 1.125a1.25 1.25 0 0 1-1.219.094' />
    </g>
    <defs>
      <clipPath id='6f50d9b216570cb00aef33e15edbf2f6__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarXlRegularIcon);
export default ForwardRef;
