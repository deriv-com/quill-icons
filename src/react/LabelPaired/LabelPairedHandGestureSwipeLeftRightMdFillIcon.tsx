import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureSwipeLeftRightMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 7.219c.438 0 .781.343.781.781v2.906a.87.87 0 0 1 .625-.25c.5 0 .906.375.938.875a.87.87 0 0 1 .625-.25c.5 0 .906.375.937.875a.87.87 0 0 1 .625-.25c.5 0 .938.438.938.938v1.875c0 1.375-1.125 2.5-2.5 2.5h-2.313a3.14 3.14 0 0 1-2-.719l-.094-.094c-.593-.468-.906-1.187-.906-1.937v-.719c0-.375.157-.719.469-.969l.375-.312c.031-.031.063-.063.125-.063v1.063c0 .187.125.312.313.312a.313.313 0 0 0 .312-.312V8c0-.437.313-.781.781-.781zm5.188 3.093 1.687-1.687c.188-.187.188-.469 0-.625l-1.781-1.812a.52.52 0 0 0-.656 0 .52.52 0 0 0 0 .656l1.03 1h-3.03c-.25 0-.438.218-.438.468s.188.438.438.438h3.03l-.905.906a.453.453 0 0 0 0 .656c.187.157.468.157.624 0m-10.407 0L3.125 8.626c-.187-.187-.187-.469 0-.625l1.781-1.812c.188-.157.469-.157.625 0a.453.453 0 0 1 0 .656l-1 1h3.032c.25 0 .437.218.437.468s-.187.438-.437.438H4.53l.907.906a.52.52 0 0 1 0 .656.52.52 0 0 1-.657 0' />
    </g>
    <defs>
      <clipPath id='658f9ea6cde240f668bfbace88fc8d78__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureSwipeLeftRightMdFillIcon);
export default ForwardRef;
