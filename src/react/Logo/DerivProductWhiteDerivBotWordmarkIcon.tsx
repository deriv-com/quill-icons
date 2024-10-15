import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivProductWhiteDerivBotWordmarkIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 182 35'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#fff'>
      <path
        fillRule='evenodd'
        d='m20.739 1.084-1.772 10.05h-6.152c-5.74 0-11.21 4.65-12.224 10.39l-.43 2.443c-1.009 5.74 2.82 10.39 8.56 10.39h5.131c4.183 0 8.168-3.386 8.904-7.57L27.482 0zM16.374 25.84c-.227 1.292-1.39 2.344-2.682 2.344h-3.117c-2.58 0-4.306-2.094-3.854-4.679l.27-1.523c.457-2.58 2.919-4.678 5.498-4.678h5.39z'
        clipRule='evenodd'
      />
      <path d='M68.118 34.359h6.385l4.037-22.902h-6.385zM68.33 14.443l.002-.005.479-2.717c-6.552-1.688-11.656.058-13.734.919l-3.832 21.724h6.39l3.109-17.643c.959-.191 4.08-.49 7.105.45z' />
      <path
        fillRule='evenodd'
        d='M42.914 11.133h-4.966c-4.844 0-9.46 3.923-10.314 8.767l-1.005 5.692c-.854 4.844 2.377 8.768 7.22 8.768h10.574l1.085-6.155H35.57c-1.613 0-2.693-1.306-2.405-2.924l.033-.193h16.02l.915-5.188c.854-4.844-2.377-8.767-7.22-8.767m.81 8.276-.037.33h-9.526l.052-.292c.287-1.613 1.759-3.032 3.376-3.032h3.721c1.6 0 2.68 1.396 2.415 2.994'
        clipRule='evenodd'
      />
      <path d='M89.639 26.563c2.899-5.216 6.095-12.06 7.427-15.106h6.395c-2.177 5.788-7.165 15.633-11.998 22.902h-6.39c-2.218-6.919-3.65-16.559-3.924-22.902h6.39c.116 2.07 1.042 9.744 2.1 15.106M121.104 34.633a56 56 0 0 1-2.208-.048 62 62 0 0 1-2.352-.144 56 56 0 0 1-2.304-.24 18 18 0 0 1-2.112-.384V1.561q.96-.24 2.112-.384a56 56 0 0 1 2.304-.24 62 62 0 0 1 2.352-.144 52 52 0 0 1 2.16-.048q2.88 0 5.376.432 2.544.432 4.368 1.488 1.872 1.008 2.928 2.688t1.056 4.128q0 2.736-1.296 4.512-1.296 1.728-3.456 2.592 2.928.864 4.656 2.736t1.728 5.28q0 4.992-3.696 7.536-3.648 2.496-11.616 2.496m-4.368-15.792v11.712q.528.048 1.248.096.624.048 1.44.096h1.968q2.064 0 3.888-.24 1.872-.288 3.264-.96t2.208-1.872q.864-1.2.864-3.024 0-1.632-.624-2.736-.624-1.152-1.824-1.824-1.152-.672-2.784-.96t-3.648-.288zm0-3.744h4.896q1.728 0 3.264-.24t2.64-.864q1.152-.624 1.776-1.632.672-1.008.672-2.544 0-1.44-.672-2.4-.672-1.008-1.872-1.584-1.152-.624-2.736-.912a19 19 0 0 0-3.36-.288q-1.776 0-2.784.048t-1.824.144zM162.796 21.865q0 2.976-.864 5.376t-2.448 4.128a10.7 10.7 0 0 1-3.696 2.688q-2.16.912-4.704.912t-4.704-.912a11.2 11.2 0 0 1-3.744-2.688q-1.536-1.728-2.4-4.128t-.864-5.376q0-2.928.864-5.328.864-2.448 2.4-4.176a10.6 10.6 0 0 1 3.744-2.64q2.16-.96 4.704-.96t4.704.96a10.2 10.2 0 0 1 3.696 2.64q1.584 1.728 2.448 4.176.864 2.4.864 5.328m-4.656 0q0-4.224-1.92-6.672-1.872-2.496-5.136-2.496t-5.184 2.496q-1.872 2.448-1.872 6.672t1.872 6.72q1.92 2.448 5.184 2.448t5.136-2.448q1.92-2.496 1.92-6.72M171.332 9.385h9.456v3.744h-9.456v11.52q0 1.872.288 3.12.288 1.2.864 1.92.576.672 1.44.96.865.288 2.016.288 2.016 0 3.216-.432 1.248-.48 1.728-.672l.864 3.696q-.672.336-2.352.816-1.68.528-3.84.528-2.544 0-4.224-.624-1.632-.672-2.64-1.968t-1.44-3.168q-.384-1.92-.384-4.416V2.425l4.464-.768z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(DerivProductWhiteDerivBotWordmarkIcon);
export default ForwardRef;