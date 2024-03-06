import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 28.5q.61 0 1.36-.61.75-.609 1.546-2.062.704-1.406 1.125-3.328H7.97q.422 1.921 1.125 3.328.797 1.453 1.547 2.063.75.609 1.359.609M7.688 21h8.625q.187-1.406.187-3 0-1.593-.187-3H7.688a23 23 0 0 0-.188 3q0 1.594.188 3m.28-7.5h8.063q-.422-1.921-1.125-3.328-.797-1.453-1.547-2.063Q12.61 7.5 12 7.5q-.61 0-1.36.61-.75.609-1.546 2.062-.703 1.406-1.125 3.328m9.845 1.5Q18 16.453 18 18a23 23 0 0 1-.187 3h4.265q.422-1.454.422-3t-.422-3zm3.703-1.5a10.6 10.6 0 0 0-2.532-3.328 10.8 10.8 0 0 0-3.609-2.11q1.5 2.016 2.203 5.438zm-15.094 0q.704-3.422 2.25-5.437a10.7 10.7 0 0 0-3.656 2.109A10 10 0 0 0 2.53 13.5zm-4.5 1.5a10.7 10.7 0 0 0-.422 3q0 1.546.422 3h4.266A23 23 0 0 1 6 18q0-1.547.188-3zm13.453 12.938a10.8 10.8 0 0 0 3.61-2.11 10 10 0 0 0 2.484-3.328h-3.89q-.704 3.422-2.204 5.438m-6.703 0q-1.546-2.016-2.25-5.438h-3.89a10 10 0 0 0 2.484 3.328 10.7 10.7 0 0 0 3.656 2.11M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30' />
    </g>
    <defs>
      <clipPath id='5014d16188796363f748f99f7cb6b8f9__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeXlRegularIcon);
export default ForwardRef;
