<script lang="ts">
    import NavigationBar from "./components/navigation_bar.svelte";
</script>


<style>
    :global(:root) {
        --font-size: 16px;
        --base-text-color: rgb(51, 51, 51);
        --button-text-color: var(--base-text-color);
        --border-radius: 0px;
        --button-foreground-color: rgb(255, 116, 52);
        --button-background-color: rgb(167, 76, 34);
        --hover-foreground-color: rgb(255, 135, 99);
        --hover-background-color: rgb(145, 80, 60);
    }

    main {
        display: grid;
        gap: 2rem;
        font-size: var(--font-size);
        padding: 3rem 1rem;
    }

    .info-container {
        padding: 1rem;
        background-color: rgb(30, 30, 30);
        border-radius: var(--border-radius);
    }

    #welcome {
        background-image: url("/logos/logo.svg");
        background-position: center;
        background-repeat: none;
        background-size: cover;
    }
</style>


<NavigationBar/>
<main>
    <div class="info-container" id="welcome">
        <h2>Hey! Fuck You!</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tempore incidunt dignissimos hic quidem ratione saepe eius, illo maxime tempora exercitationem perspiciatis? Assumenda quae, ab qui corporis nulla iusto. Hic?
            Modi voluptatum est veritatis quas voluptate aliquam pariatur quam odio voluptatem suscipit et fugit, culpa illum laudantium, dicta officia ab in maiores corporis. Consequatur maxime voluptate voluptas dolores reprehenderit quos?
            Sapiente assumenda id soluta. Maiores esse ullam accusantium debitis illo perspiciatis aperiam laborum sit optio et nisi distinctio iure quasi hic magni impedit, suscipit cum vitae commodi beatae id? Necessitatibus.
            Esse quas suscipit veniam iure minima velit culpa non aliquam itaque numquam dolor, doloremque, voluptatibus quos nisi ad labore architecto delectus modi! Vel quae officia fuga maiores optio a minima.
            Molestiae dolore id rem provident similique dicta quod architecto quidem perspiciatis, eius facilis tempore nisi perferendis officiis. Minus saepe provident laborum? Tempora rerum commodi ullam consectetur rem nesciunt ab eveniet!
        </p>
    </div>
    <div class="info-container" id="about">
        <h2>Swaggin'</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste temporibus inventore, vitae omnis cumque quasi libero perferendis voluptatibus? Assumenda, vero possimus! Animi natus deserunt hic odio facilis commodi sapiente.
            Atque labore ipsam eveniet asperiores necessitatibus, dignissimos dolor rerum sunt aut? Et, ipsa. Natus placeat libero eos nisi ullam repellendus magnam, enim possimus deserunt atque, inventore voluptatem sint maiores distinctio.
            Voluptatum fugiat numquam ea animi quo veritatis cupiditate voluptate asperiores expedita? Repellendus reprehenderit fugit tempore repellat sunt delectus laborum possimus ratione, vel explicabo? Reprehenderit facere inventore repellat, rerum reiciendis aliquid!
            Eveniet impedit ipsum repudiandae! Vitae quidem maxime deserunt pariatur non, aspernatur consectetur? Voluptatem tempore sequi blanditiis nulla necessitatibus distinctio, officiis nam repudiandae porro veniam! Cum recusandae cupiditate ad illo similique.
            At amet rem modi, unde ratione ex cupiditate accusantium excepturi dolores autem delectus voluptatum quis corporis eos corrupti harum molestias velit. Atque nisi placeat modi voluptates nesciunt unde nobis temporibus!
            Aspernatur neque quis est possimus modi accusantium itaque qui eos minus amet fugiat aliquam, esse dicta maxime, sunt aut non fugit aliquid ducimus! Quia aliquam eum fugiat sunt labore porro.
            Facere similique dignissimos odit doloremque officiis dolor ullam nihil culpa tenetur voluptas architecto eos facilis consequuntur, nam asperiores totam? Voluptatibus vero odit dolore ad rem. Fugit excepturi molestias officia quasi!
            Odit aliquam neque ex iusto laborum delectus. Incidunt asperiores repellendus impedit delectus neque, necessitatibus, pariatur magni debitis ullam ipsam totam! Facere esse assumenda veniam sed possimus, sunt facilis delectus accusantium?
            Aliquam assumenda facere fugiat ipsum consectetur harum non esse quos? Quis facilis dolorum doloremque. Sequi consectetur dicta error ipsam, pariatur, doloribus quis mollitia ipsum fuga veritatis at expedita non architecto!
        </p>
    </div>
    <div class="info-container" id="skills">
        <h2>:)</h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque nemo doloremque et error eius omnis modi molestiae maiores dolorum, vel mollitia reiciendis hic possimus voluptas non totam optio aperiam. Alias?
            Laudantium culpa, provident nobis, expedita atque nemo eius quidem, sequi doloremque adipisci et. Ipsa laborum veritatis labore odio nostrum alias modi dolorem, iste sunt quo. Eos aliquid laborum aperiam odio.
            Suscipit, delectus rem fugit accusantium hic itaque a excepturi dolores iure exercitationem totam fuga distinctio, eligendi assumenda reprehenderit, beatae deleniti corrupti qui alias rerum in ab blanditiis doloribus animi! Tempora!
            Ut voluptatem ab optio dolorum beatae vitae sit nostrum, doloremque alias qui cum, accusantium tempora voluptatibus dolor incidunt. Ipsa id perferendis vitae aperiam voluptates suscipit nisi velit iure, impedit sed.
            Repellendus ipsa harum dolore deleniti. Culpa facilis libero veniam blanditiis ex, soluta nesciunt hic rem ratione quibusdam fuga doloribus pariatur maiores, dolor cumque consectetur dolore illum inventore. Dolore, eveniet aliquid.
            Recusandae voluptates id esse rem quis ipsa fugiat sit sint dolore pariatur distinctio placeat ex consectetur veritatis aspernatur deserunt magnam perspiciatis, doloremque non soluta fuga porro amet officiis. Aliquid, cum.
            Voluptates culpa commodi nobis recusandae distinctio quod assumenda dicta excepturi a eum id vel labore totam tempore cupiditate expedita natus obcaecati quas doloribus, laudantium iusto veniam dolore deserunt quam. Blanditiis?
            Officiis blanditiis optio sequi, voluptatem quasi laboriosam porro. Ipsum sunt delectus harum cum quisquam error exercitationem voluptas molestias quam eum. Perferendis iure sit amet nihil repudiandae qui fugit provident neque!
            Fugiat eligendi pariatur non ipsum, architecto blanditiis nobis illo quae modi autem, ratione numquam in nesciunt incidunt facere magni amet doloremque ut assumenda voluptatum voluptatem mollitia, error corporis. Quasi, recusandae.
            Enim sequi architecto quam cum placeat incidunt ut praesentium excepturi facere dignissimos libero ducimus nam odio, temporibus nisi mollitia aliquam laborum quisquam exercitationem quia sed porro consequuntur qui esse? Repellendus.
            Sed dignissimos, consectetur, eius itaque rerum, eos sapiente corrupti fugiat qui molestiae deserunt repellat nostrum exercitationem praesentium facere voluptatem culpa porro inventore! Quidem ullam quibusdam impedit enim minus a aliquam?
            Voluptates error deserunt eum iste nam voluptas numquam inventore nesciunt ab! Corrupti dolores autem magni voluptatem atque error suscipit enim eius obcaecati natus, est eveniet blanditiis consequuntur? Veritatis, nulla libero.
            Voluptate expedita reprehenderit, sed quia vero repellat ducimus perspiciatis pariatur recusandae id qui quo nesciunt quas voluptatum debitis culpa dolorum inventore quae cupiditate reiciendis aliquid unde libero eos. Consequuntur, fugit.
        </p>
    </div>
    <div class="info-container">
        <h2>Mmmmmmmmmm</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cum non voluptates animi eligendi nemo, necessitatibus tempore commodi aut maiores temporibus voluptatibus atque dolor veniam adipisci expedita neque ut quia.
            Porro, cum. Sit illo aliquam voluptatum, facilis, iure, magni esse voluptas repudiandae sequi numquam perspiciatis nesciunt nam incidunt tenetur odit. Quam qui modi cupiditate doloremque praesentium dolorem id ratione optio.
            Inventore, dolores facilis. Ea perferendis praesentium repudiandae. Corrupti, quasi, enim id placeat veritatis mollitia est facilis veniam atque illum ratione ab aspernatur at alias, possimus sequi? Numquam tempore doloribus non.
            Exercitationem iusto fugiat dolor? Quos quod vel, esse rem consectetur quidem dolores temporibus ab molestias deleniti at, ad hic cupiditate quibusdam, distinctio ducimus quasi repudiandae alias. Nesciunt, ullam! Dolorum, nostrum.
            Odio ipsa autem, error assumenda laudantium at soluta adipisci eos enim dignissimos animi in natus nesciunt odit illo vero similique, eum accusantium, doloremque unde quisquam? Accusamus rem in ad similique?
            Nisi architecto eligendi quis ipsam quo numquam aut dolores eum! Voluptatibus possimus nihil sequi obcaecati itaque, nobis voluptatem. Incidunt voluptatibus iste facilis, natus dolor nihil. Porro exercitationem architecto hic eius?
            Quia, accusamus! Cupiditate quis corporis, quas sunt magni aperiam distinctio accusantium adipisci ipsum consectetur sit, cumque reiciendis pariatur aliquam dignissimos! Eum autem incidunt accusantium quas! Similique animi itaque facilis maxime?
            Explicabo, repudiandae quam! Sequi beatae totam quos magnam voluptatem nulla sint, odio, quo ex porro inventore placeat accusamus dignissimos ab quod laudantium explicabo delectus pariatur adipisci? Eos voluptates amet mollitia?
            Incidunt adipisci sit atque ullam architecto cumque expedita aliquid odio suscipit, nemo error vel qui quia libero iusto eos saepe reiciendis, fugiat doloribus eum repellat! Quos numquam veniam similique perferendis!
            Voluptate fugiat alias quam impedit iure corporis quasi, illum laboriosam perspiciatis! Cupiditate ipsa quidem architecto possimus fugit quaerat vel nam atque pariatur sint eligendi tenetur neque ipsam nihil, omnis molestias!
            Voluptates, vero autem! Sequi placeat perspiciatis, rerum qui eaque inventore doloribus praesentium aperiam soluta excepturi similique vel fugit veritatis. Mollitia laudantium voluptas labore vero, magnam porro ipsa quae autem blanditiis!
            Ullam repellat rerum quidem saepe ut, magni eos consectetur nostrum optio perspiciatis repudiandae, quibusdam nisi ipsam! Iusto laborum harum accusantium sunt, eos nulla illum. Hic accusantium quia eius voluptates aperiam?
            Ad repudiandae alias pariatur, impedit ab nihil dolorum laudantium perferendis non ut, nulla maxime qui sapiente iure provident ipsa quaerat necessitatibus autem temporibus. Fugiat reiciendis magnam ratione libero maiores ad!
            Consequatur, obcaecati totam. Possimus, sunt eligendi. Ipsum tempora nostrum ipsam vel, sed quibusdam debitis ratione eaque. Sapiente ipsum consequuntur quae, amet architecto quis incidunt illo ipsam est, maiores eveniet unde?
            Voluptatum similique esse quos alias nulla commodi repudiandae fugit aliquid quas natus, dolores consectetur corporis! Illo aut esse impedit quia error laudantium, ea, sint aliquam voluptatibus rem nisi doloribus placeat.
            Reiciendis, voluptas fugiat rem atque quos, provident cupiditate repellat ducimus, molestias enim corporis perferendis quibusdam nulla nesciunt itaque iure quod neque placeat! Vero at quia est ea ullam ipsum cum.
            Voluptate, expedita iure. Placeat ipsa ex, incidunt accusamus itaque mollitia quia laudantium tempora consectetur voluptatum odio? Eligendi ad rem at id aperiam provident deleniti, in iste suscipit fugiat? Explicabo, quae.
            Obcaecati ipsam modi, quidem quas at voluptatibus beatae sit voluptatem placeat odio et! Ad quos dolore praesentium ipsa mollitia expedita eligendi ut, aliquam voluptatem quas possimus dolores iusto qui dolor!
            Quaerat necessitatibus explicabo nobis dignissimos modi illum, sed, totam ipsam odit minima ut. Fugit quasi officiis deleniti ex ipsa eaque expedita maxime cupiditate doloremque unde modi sed dolorem, minus quaerat!
            Corporis iure consequatur aliquid, quibusdam consectetur pariatur similique veniam adipisci. Laborum provident repudiandae delectus sunt voluptatum debitis, dignissimos possimus pariatur, expedita accusamus quos deserunt sit id beatae harum fugit maiores?
        </p>
    </div>
</main>