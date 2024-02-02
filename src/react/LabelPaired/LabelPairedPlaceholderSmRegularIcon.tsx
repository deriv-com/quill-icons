import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.781 4.625h.656q.411.027.438.438-.027.41-.437.437H2.78q-.656.027-1.094.438-.41.437-.437 1.093v.657q-.027.41-.437.437-.411-.027-.438-.437V7.03q.027-1.012.71-1.695.685-.684 1.696-.711M.812 9q.411.027.438.438v2.624q-.027.411-.437.438-.411-.027-.438-.437V9.437Q.402 9.028.813 9m11.376 0q.41.027.437.438v2.624q-.027.411-.437.438-.411-.027-.438-.437V9.437q.027-.41.438-.437m0-.875q-.411-.027-.438-.437V7.03q-.027-.656-.437-1.093-.438-.411-1.094-.438h-.656q-.411-.027-.438-.437.027-.411.438-.438h.656q1.012.027 1.695.71.684.685.711 1.696v.657q-.027.41-.437.437m.437 5.688v.656q-.027 1.012-.71 1.695-.685.684-1.696.711h-.656q-.411-.027-.438-.437.027-.411.438-.438h.656q.656-.027 1.094-.437.41-.438.437-1.094v-.656q.027-.411.438-.438.41.027.437.438m-11.375 0v.656q.027.656.438 1.094.437.41 1.093.437h.656q.411.027.438.438-.027.41-.437.437H2.78q-1.012-.027-1.695-.71-.684-.685-.711-1.696v-.656q.027-.411.438-.438.41.027.437.438m3.938 3.062q-.411-.027-.438-.437.027-.411.438-.438h2.625q.41.027.437.438-.027.41-.437.437zM4.75 5.063q.027-.411.438-.438h2.625q.41.027.437.438-.027.41-.437.437H5.188q-.411-.027-.438-.437' />
    </g>
    <defs>
      <clipPath id='8fd86d0270edb81f__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderSmRegularIcon);
export default ForwardRef;
