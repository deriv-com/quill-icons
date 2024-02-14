import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.75 6.75q.047-.703.75-.75.703.046.75.75v.797q2.907.329 4.781 2.39Q17.954 12.002 18 15v1.36q.046 3.187 2.25 5.484l.14.14q.61.61.61 1.453 0 .891-.61 1.454-.562.609-1.453.609H2.064q-.891 0-1.454-.61Q0 24.329 0 23.438q0-.843.61-1.5l.14-.093Q2.954 19.546 3 16.359V15q.047-3 1.969-5.062Q6.844 7.874 9.75 7.547zM10.5 9q-2.531.047-4.266 1.734Q4.547 12.47 4.5 15v1.36q-.046 3.796-2.719 6.515l-.093.14a.58.58 0 0 0-.188.422q.047.516.563.563h16.875q.514-.047.562-.562a.58.58 0 0 0-.187-.422l-.094-.141q-2.673-2.718-2.719-6.516V15q-.047-2.531-1.781-4.266Q13.032 9.047 10.5 9M9.094 27.516q.375.938 1.406.984 1.032-.047 1.406-.984.282-.657.985-.47.61.282.422.938a3.13 3.13 0 0 1-1.079 1.453Q11.484 30 10.5 30a2.8 2.8 0 0 1-1.734-.562 3.13 3.13 0 0 1-1.078-1.454q-.188-.656.421-.937.704-.188.985.469' />
    </g>
    <defs>
      <clipPath id='4d0412c7b60f751ad83355e93d927d37__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellXlRegularIcon);
export default ForwardRef;
