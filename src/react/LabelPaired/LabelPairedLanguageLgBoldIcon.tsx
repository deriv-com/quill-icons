import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 8h20c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-20A2.47 2.47 0 0 1 0 20.5v-10C0 9.133 1.094 8 2.5 8m20 1.875h-10v11.25h10a.64.64 0 0 0 .625-.625v-10c0-.312-.312-.625-.625-.625m-15.547 2.5a.82.82 0 0 0-.703-.469c-.312 0-.625.196-.742.469L3.008 18c-.156.39 0 .86.39 1.055.43.156.86 0 1.055-.39l.352-.821h2.851l.352.82c.195.39.664.547 1.055.39A.835.835 0 0 0 9.453 18zm.04 3.906H5.507l.742-1.64zm10.82-4.375c.43 0 .78.352.78.781v.157h2.345c.43 0 .78.351.78.781s-.35.781-.78.781h-.079l-.078.196a7.7 7.7 0 0 1-1.562 2.539c.039.039.078.039.117.078l.742.43a.85.85 0 0 1 .274 1.093.85.85 0 0 1-1.094.274l-.742-.47c-.157-.077-.313-.194-.508-.312-.39.274-.86.547-1.328.743l-.117.078c-.391.156-.86 0-1.055-.39-.156-.43 0-.86.39-1.056l.157-.039c.234-.117.508-.273.742-.39l-.508-.47a.885.885 0 0 1 0-1.132.885.885 0 0 1 1.133 0l.547.586h.039a6.9 6.9 0 0 0 1.172-1.758H15a.783.783 0 0 1-.781-.781c0-.43.351-.781.781-.781h2.031v-.156c0-.43.352-.782.782-.782' />
    </g>
    <defs>
      <clipPath id='45dca9a4e452891dd36e7538c18febc9__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageLgBoldIcon);
export default ForwardRef;
