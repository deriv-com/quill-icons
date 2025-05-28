import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGraduationCapLgFillIcon = (
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
      <path d='M12.5 6.75c.313 0 .625.078.898.195l10.977 3.946a.93.93 0 0 1 .625.859c0 .43-.273.781-.625.898l-10.977 3.946c-.273.117-.585.156-.937.156-.313 0-.625-.04-.899-.156l-6.25-2.266a3.9 3.9 0 0 1 1.25-.82l6.133-2.422c.352-.117.508-.469.352-.82a.607.607 0 0 0-.781-.352l-6.133 2.422c-.781.312-1.445.781-1.953 1.406a5.3 5.3 0 0 0-1.055 3.164v.977c.234.508.39 1.094.508 1.64.234 1.055.43 2.579.078 4.258-.04.157-.117.313-.273.39-.157.079-.313.118-.47.079l-2.5-.625a.6.6 0 0 1-.468-.39.77.77 0 0 1 .117-.587c.313-.468.625-.976.86-1.484.468-.898.898-2.031.898-3.164v-1.094c0-1.25.352-2.422.977-3.437l-2.266-.82C.234 12.53 0 12.178 0 11.75c0-.39.234-.742.586-.86l10.977-3.945a2.4 2.4 0 0 1 .937-.195M5 21.438l.586-5.665 5.547 1.993c.43.156.898.234 1.367.234.43 0 .898-.078 1.328-.234l5.547-1.993.625 5.665c0 1.406-3.36 2.812-7.5 2.812S5 22.844 5 21.438' />
    </g>
    <defs>
      <clipPath id='2b26b41d615d58d2c01eddd5bdb39f13__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGraduationCapLgFillIcon);
export default ForwardRef;
