import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapLeftLgFillIcon = (
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
      <path d='M7.93 12.96c.508-.233 1.093 0 1.328.47l1.562 3.28c.078-.273.274-.468.547-.624a1.207 1.207 0 0 1 1.524.508c.117-.274.312-.508.586-.625a1.11 1.11 0 0 1 1.484.508c.117-.274.312-.508.625-.665.547-.273 1.289 0 1.562.586l.977 2.11c.742 1.562.078 3.437-1.484 4.14l-2.618 1.25c-.82.391-1.757.508-2.617.274l-.156-.04a3.06 3.06 0 0 1-2.07-1.718l-.39-.82a1.58 1.58 0 0 1 0-1.328l.233-.547c.04-.04.079-.117.118-.157l.547 1.211c.117.196.351.274.546.196.157-.078.274-.313.157-.508L7.46 14.25a.95.95 0 0 1 .469-1.29m2.5 1.642c.195-.352.312-.782.312-1.211 0-1.368-1.133-2.5-2.5-2.5a2.52 2.52 0 0 0-2.5 2.5 2.52 2.52 0 0 0 1.797 2.422l-.586-1.211a1.616 1.616 0 0 1 .742-2.11c.782-.351 1.72 0 2.11.742zM4.492 6.75c.39 0 .742.352.742.781v15.977c0 .43-.351.742-.742.742a.72.72 0 0 1-.742-.742V7.53c0-.43.313-.781.742-.781' />
    </g>
    <defs>
      <clipPath id='b6ab5d4b756d4d88c47e79cfd2d487d7__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapLeftLgFillIcon);
export default ForwardRef;
