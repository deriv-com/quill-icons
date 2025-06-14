import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.266 9.57a3.5 3.5 0 0 0 .609-1.945A3.39 3.39 0 0 0 4.5 4.25a3.376 3.376 0 0 0-3.375 3.375c0 .727.21 1.383.586 1.945.094.117.21.282.328.446.305.398.633.867.89 1.336.212.375.329.773.376 1.171h-.75c-.07-.28-.14-.562-.282-.82a10 10 0 0 0-.82-1.219l-.351-.492a4.1 4.1 0 0 1-.727-2.367A4.116 4.116 0 0 1 4.5 3.5a4.13 4.13 0 0 1 4.125 4.125 4.1 4.1 0 0 1-.75 2.367l-.352.492a10 10 0 0 0-.82 1.22c-.14.257-.21.515-.281.796h-.75c.07-.375.164-.773.375-1.148.258-.47.61-.938.89-1.36.118-.14.235-.305.329-.445zM4.5 5.75a1.866 1.866 0 0 0-1.875 1.875c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375A2.636 2.636 0 0 1 4.5 5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375M3.422 14c.164.445.586.75 1.078.75.469 0 .89-.305 1.055-.75zm-.797-.375v-.117c0-.14.094-.258.234-.258h3.258a.26.26 0 0 1 .258.258v.117A1.866 1.866 0 0 1 4.5 15.5a1.85 1.85 0 0 1-1.875-1.875' />
    </g>
    <defs>
      <clipPath id='243c33df19272f36dbdaa42caf726b11__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbCaptionRegularIcon);
export default ForwardRef;
