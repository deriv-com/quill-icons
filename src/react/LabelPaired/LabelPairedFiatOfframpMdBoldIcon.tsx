import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOfframpMdBoldIcon = (
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
      <path d='M6.125 10.781c.938 0 1.813-.5 2.281-1.312a2.63 2.63 0 0 0 0-2.625C7.937 6.03 7.062 5.53 6.125 5.5c-.937 0-1.812.531-2.281 1.344a2.626 2.626 0 0 0 2.281 3.937m-2.625.563v6c0 .625.531 1.156 1.156 1.156h6c-.594-.687-.937-1.625-.937-2.625 0-1.344.656-2.562 1.687-3.312l-1.969-1.97a4.06 4.06 0 0 1-3.312 1.688c-1 0-1.937-.344-2.625-.937M13.844 18.5a2.6 2.6 0 0 0 2.625-2.625 2.62 2.62 0 0 0-2.625-2.625q-.515 0-.938.188h-.031a2.63 2.63 0 0 0-1.656 2.437 2.62 2.62 0 0 0 2.625 2.625m-1-6.625a3.5 3.5 0 0 1 1-.125c2.281 0 4.156 1.844 4.156 4.125S16.125 20 13.844 20H4.656A2.654 2.654 0 0 1 2 17.344V8.156C2 5.875 3.844 4 6.125 4s4.125 1.875 4.125 4.156c0 .344-.031.688-.125 1zm1.5-4.969a.76.76 0 0 1 .75.75v2.907c0 .312-.188.562-.469.687a.72.72 0 0 1-.812-.156l-2.907-2.906c-.281-.282-.281-.75 0-1.063a.775.775 0 0 1 1.063 0l1.625 1.625V7.656a.74.74 0 0 1 .75-.75m-.125 6.719H13.5v.313c-.5.156-.812.624-.812 1.124 0 .657.53 1.188 1.156 1.188.25 0 .437.188.437.438a.447.447 0 0 1-.437.437.47.47 0 0 1-.438-.437v-.125h-.719v.125c0 .5.313.937.813 1.093v.344h.719v-.312c.469-.188.812-.625.812-1.125 0-.657-.531-1.188-1.187-1.188a.447.447 0 0 1-.438-.437c0-.25.219-.438.438-.438.25 0 .437.188.437.438v.093h.75v-.094c0-.5-.344-.937-.812-1.124zM5.656 6.031h-.593v.625h-.594v.594h.593v1.813H4.47v.593h.593v.594h.594v-.594h.625v.594h.594v-.594c.469 0 .875-.406.875-.906 0-.219-.062-.437-.219-.594a.897.897 0 0 0-.062-1.281c-.157-.156-.375-.219-.594-.219v-.625h-.594v.625h-.625zm1.219 2.407c.156 0 .281.156.281.312s-.125.313-.281.313H5.656v-.626zm0-1.188c.156 0 .281.125.281.313a.28.28 0 0 1-.281.28H5.656V7.25z' />
    </g>
    <defs>
      <clipPath id='b3678eceed63285e4883b53fcdfc4873__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOfframpMdBoldIcon);
export default ForwardRef;
