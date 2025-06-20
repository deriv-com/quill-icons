import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageLgFillIcon = (
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
      <path d='M0 10.5C0 9.133 1.094 8 2.5 8h20c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-20A2.47 2.47 0 0 1 0 20.5zm12.5 0v10h10v-10zm-5.547 1.875a.82.82 0 0 0-.703-.469c-.312 0-.625.196-.742.469L3.008 18c-.156.39 0 .86.39 1.055.43.156.86 0 1.055-.39l.352-.821h2.851l.352.82c.195.39.664.547 1.055.39A.835.835 0 0 0 9.453 18zm-.703 2.266.742 1.64H5.508zm11.25-2.735c.43 0 .781.352.781.781v.157h2.344c.43 0 .781.351.781.781s-.351.781-.781.781h-.078l-.078.196c-.352.937-.86 1.835-1.563 2.539.04.039.078.039.117.078l.743.43a.85.85 0 0 1 .273 1.093.85.85 0 0 1-1.094.274l-.703-.47c-.195-.077-.351-.194-.547-.312-.39.274-.82.547-1.328.743l-.117.078c-.39.156-.86 0-1.055-.39a.84.84 0 0 1 .43-1.056l.117-.039c.274-.117.508-.273.742-.39l-.468-.47a.8.8 0 0 1 0-1.132c.273-.312.78-.312 1.093 0l.547.586h.04a6.9 6.9 0 0 0 1.171-1.758h-4.179a.784.784 0 0 1-.782-.781c0-.43.352-.781.781-.781h2.032v-.156c0-.43.351-.782.781-.782' />
    </g>
    <defs>
      <clipPath id='cf0a2cd2150de9af797c82130ea4e611__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageLgFillIcon);
export default ForwardRef;
