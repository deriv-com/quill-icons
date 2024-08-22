import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureSwipeLeftRightMdBoldIcon = (
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
      <path d='M10 7.219c.688 0 1.25.562 1.25 1.25v1.875h.156c.469 0 .875.281 1.094.656.094-.031.188-.031.313-.031.437 0 .843.281 1.062.625h.188c.687 0 1.25.562 1.25 1.25v2.031a2.34 2.34 0 0 1-2.344 2.344H10.5c-.531 0-1.031-.157-1.5-.407l-.062-.03c-.907-.532-1.438-1.5-1.438-2.563v-.188c0-.5.188-.969.531-1.281l.406-.375c.094-.062.188-.156.313-.219V8.47c0-.688.531-1.25 1.25-1.25m-.312 1.25v5.469a.336.336 0 0 1-.313.312.313.313 0 0 1-.312-.312v-.813l-.376.313c-.187.156-.25.343-.25.593v.188c0 .719.376 1.406 1 1.75L9.47 16c.312.188.687.281 1.031.281h2.469a1.42 1.42 0 0 0 1.406-1.406v-2.031a.336.336 0 0 0-.312-.313.45.45 0 0 0-.22.063.5.5 0 0 1-.468.062.49.49 0 0 1-.25-.406.313.313 0 0 0-.312-.312c-.126 0-.188.03-.25.093-.126.156-.344.25-.532.156a.43.43 0 0 1-.312-.406v-.156a.313.313 0 0 0-.313-.312c-.125 0-.187.03-.25.093-.125.156-.344.25-.531.156a.44.44 0 0 1-.312-.437V8.469A.336.336 0 0 0 10 8.156a.313.313 0 0 0-.312.313m5.5 1.844 1.687-1.688c.188-.187.188-.469 0-.625l-1.781-1.812a.52.52 0 0 0-.656 0 .52.52 0 0 0 0 .656l1.03 1h-3.03c-.25 0-.438.218-.438.468s.188.438.438.438h3.03l-.905.906a.453.453 0 0 0 0 .656c.187.157.468.157.624 0m-10.407 0L3.125 8.625c-.187-.187-.187-.469 0-.625l1.781-1.812c.188-.157.469-.157.625 0a.453.453 0 0 1 0 .656l-1 1h3.032c.25 0 .437.218.437.468s-.187.438-.437.438H4.53l.907.906a.52.52 0 0 1 0 .656.52.52 0 0 1-.657 0' />
    </g>
    <defs>
      <clipPath id='b9f0246c4bea728cfbf89b2af27f8746__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureSwipeLeftRightMdBoldIcon);
export default ForwardRef;
